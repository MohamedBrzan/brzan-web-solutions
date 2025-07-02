
# Building Scalable React Applications

As React applications grow in complexity, maintaining scalability becomes crucial. This guide covers essential patterns, architectures, and best practices for building React applications that can scale effectively.

## Architecture Patterns

### 1. Feature-Based Structure

Organize your application by features rather than file types:

```
src/
  features/
    authentication/
      components/
      hooks/
      services/
      types/
      index.ts
    dashboard/
      components/
      hooks/
      services/
      types/
      index.ts
  shared/
    components/
    hooks/
    utils/
    types/
```

### 2. Component Composition

Use composition over inheritance for flexible component design:

```jsx
// ❌ Inheritance-like pattern
const Button = ({ variant, size, children }) => {
  const getButtonClass = () => {
    let classes = 'btn';
    if (variant === 'primary') classes += ' btn-primary';
    if (size === 'large') classes += ' btn-large';
    return classes;
  };

  return <button className={getButtonClass()}>{children}</button>;
};

// ✅ Composition pattern
const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const PrimaryButton = (props) => (
  <Button className="btn btn-primary" {...props} />
);

const LargePrimaryButton = (props) => (
  <PrimaryButton className="btn-large" {...props} />
);
```

## State Management Strategies

### 1. Local vs Global State

Keep state as local as possible:

```jsx
// ❌ Unnecessary global state
const GlobalCounter = () => {
  const { count, increment } = useGlobalState();
  return <button onClick={increment}>{count}</button>;
};

// ✅ Local state when appropriate
const LocalCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
};
```

### 2. Context API Best Practices

Split contexts by concern:

```jsx
// ❌ Single large context
const AppContext = createContext({
  user: null,
  theme: 'light',
  language: 'en',
  notifications: [],
  // ... many other properties
});

// ✅ Separate contexts
const UserContext = createContext();
const ThemeContext = createContext();
const NotificationContext = createContext();

// Provider composition
const AppProviders = ({ children }) => (
  <UserProvider>
    <ThemeProvider>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </ThemeProvider>
  </UserProvider>
);
```

## Performance Optimization

### 1. Memoization Strategies

Use React.memo, useMemo, and useCallback strategically:

```jsx
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: heavyComputation(item)
    }));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item 
          key={item.id} 
          data={item} 
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
});
```

### 2. Code Splitting

Implement route-based and component-based code splitting:

```jsx
import { lazy, Suspense } from 'react';

// Route-based splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

// Component-based splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);
```

## Custom Hooks for Reusability

Create reusable logic with custom hooks:

```jsx
// API hook
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Local storage hook
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};
```

## Error Boundaries

Implement error boundaries for graceful error handling:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Usage
const App = () => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Router>
      <Routes>
        {/* Your routes */}
      </Routes>
    </Router>
  </ErrorBoundary>
);
```

## Testing Strategies

### 1. Component Testing

Write focused component tests:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  it('increments count when button is clicked', () => {
    render(<Counter initialCount={0} />);
    
    const button = screen.getByRole('button');
    const count = screen.getByText('0');
    
    fireEvent.click(button);
    
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
```

### 2. Integration Testing

Test component interactions:

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfile } from './UserProfile';

const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

jest.mock('../services/userService', () => ({
  updateUser: jest.fn(() => Promise.resolve(mockUser))
}));

describe('UserProfile Integration', () => {
  it('updates user profile successfully', async () => {
    const user = userEvent.setup();
    render(<UserProfile userId={1} />);
    
    const nameInput = screen.getByLabelText(/name/i);
    await user.clear(nameInput);
    await user.type(nameInput, 'Jane Doe');
    
    const saveButton = screen.getByRole('button', { name: /save/i });
    await user.click(saveButton);
    
    await waitFor(() => {
      expect(screen.getByText('Profile updated successfully')).toBeInTheDocument();
    });
  });
});
```

## Conclusion

Building scalable React applications requires careful consideration of architecture, performance, and maintainability. By following these patterns and best practices, you can create applications that grow gracefully with your needs.

Key takeaways:
- Organize by features, not file types
- Keep state local when possible
- Use composition over inheritance
- Implement proper error boundaries
- Write comprehensive tests
- Optimize performance strategically

Remember, scalability is not just about handling more users—it's about maintaining code quality and developer productivity as your application grows.
