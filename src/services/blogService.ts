
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
  content: string;
}

// Centralized blog data - following Single Responsibility Principle
export const blogPostsData: Record<string, BlogPost> = {
  'building-scalable-react-applications': {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the key architectural patterns and best practices for building React applications that scale.',
    date: 'April 12, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    slug: 'building-scalable-react-applications',
    tags: ['React', 'Architecture', 'JavaScript'],
    content: `
# Building Scalable React Applications

When building React applications that need to grow and scale, proper architecture becomes crucial. In this comprehensive guide, we'll explore the key patterns and practices that will help you build maintainable and scalable React applications.

## Component Architecture

### 1. Component Composition Over Inheritance

React favors composition over inheritance. This means building complex UIs by combining smaller, focused components rather than creating large, monolithic ones.

\`\`\`jsx
// Good: Composition
const UserCard = ({ user }) => (
  <Card>
    <Avatar src={user.avatar} />
    <UserInfo name={user.name} email={user.email} />
    <UserActions onEdit={handleEdit} onDelete={handleDelete} />
  </Card>
);

// Avoid: Large monolithic components
const UserCard = ({ user }) => (
  <div className="card">
    {/* 200+ lines of JSX */}
  </div>
);
\`\`\`

### 2. Container and Presentational Components

Separate your components into two categories:
- **Container Components**: Handle data fetching and state management
- **Presentational Components**: Focus purely on rendering UI

## State Management Strategies

### Local State vs Global State

Not everything needs to be in global state. Use local state for:
- Form inputs
- UI toggles
- Component-specific data

Use global state for:
- User authentication
- Theme preferences
- Data shared across multiple components

### Context API Best Practices

\`\`\`jsx
// Create focused contexts
const AuthContext = createContext();
const ThemeContext = createContext();

// Avoid god contexts
const AppContext = createContext(); // Contains everything
\`\`\`

## Performance Optimization

### 1. React.memo and useMemo

Use React.memo for expensive components that receive the same props:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <ComplexVisualization data={data} />;
});
\`\`\`

### 2. Code Splitting

Implement route-based code splitting:

\`\`\`jsx
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
\`\`\`

## Testing Strategy

A scalable application needs a comprehensive testing strategy:

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows

## File Structure

Organize your files in a way that scales:

\`\`\`
src/
  components/
    common/
    forms/
    layout/
  pages/
  hooks/
  utils/
  services/
  types/
\`\`\`

## Conclusion

Building scalable React applications requires thoughtful planning and adherence to best practices. Focus on component composition, proper state management, performance optimization, and maintainable code structure.

The key is to start simple and refactor as your application grows, always keeping scalability and maintainability in mind.
    `
  },
  'optimizing-mongodb-for-performance': {
    id: '2',
    title: 'Optimizing MongoDB for Performance',
    excerpt: 'Discover techniques to enhance MongoDB performance through indexing, sharding, and query optimization.',
    date: 'March 5, 2023',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    slug: 'optimizing-mongodb-for-performance',
    tags: ['MongoDB', 'Database', 'Performance'],
    content: `
# Optimizing MongoDB for Performance

MongoDB is a powerful NoSQL database, but like any database system, it requires proper optimization to perform at its best. This guide covers essential techniques to boost your MongoDB performance.

## Understanding MongoDB Performance

### Key Performance Metrics

Monitor these crucial metrics:
- **Query Response Time**: How long queries take to execute
- **Throughput**: Number of operations per second
- **Resource Utilization**: CPU, memory, and disk usage
- **Index Hit Ratio**: Percentage of queries using indexes

## Indexing Strategies

### 1. Single Field Indexes

Create indexes on frequently queried fields:

\`\`\`javascript
// Create index on email field
db.users.createIndex({ email: 1 })

// Query that benefits from the index
db.users.find({ email: "user@example.com" })
\`\`\`

### 2. Compound Indexes

For queries with multiple conditions:

\`\`\`javascript
// Create compound index
db.orders.createIndex({ customerId: 1, orderDate: -1 })

// Efficient query
db.orders.find({ customerId: 123, orderDate: { $gte: new Date('2023-01-01') } })
\`\`\`

### 3. Text Indexes

For full-text search capabilities:

\`\`\`javascript
// Create text index
db.articles.createIndex({ title: "text", content: "text" })

// Text search query
db.articles.find({ $text: { $search: "mongodb performance" } })
\`\`\`

## Query Optimization

### Use Explain Plans

Always analyze your queries:

\`\`\`javascript
// Analyze query performance
db.users.find({ age: { $gte: 25 } }).explain("executionStats")
\`\`\`

### Projection

Only fetch required fields:

\`\`\`javascript
// Good: Only fetch needed fields
db.users.find({ status: "active" }, { name: 1, email: 1 })

// Avoid: Fetching entire document
db.users.find({ status: "active" })
\`\`\`

### Limit Results

Use limit() to reduce result set size:

\`\`\`javascript
// Limit results for pagination
db.products.find().sort({ createdAt: -1 }).limit(20)
\`\`\`

## Schema Design Principles

### 1. Embed vs Reference

**Embed when:**
- Data is accessed together
- Relationship is one-to-few
- Data doesn't change frequently

**Reference when:**
- Data is large
- Relationship is one-to-many or many-to-many
- Data is accessed independently

### 2. Avoid Deep Nesting

\`\`\`javascript
// Good: Flatten structure
{
  userId: ObjectId("..."),
  userEmail: "user@example.com",
  orderItems: [...]
}

// Avoid: Deep nesting
{
  user: {
    profile: {
      personal: {
        email: "user@example.com"
      }
    }
  }
}
\`\`\`

## Connection Optimization

### Connection Pooling

Configure appropriate pool sizes:

\`\`\`javascript
const client = new MongoClient(uri, {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close socket after 45 seconds of inactivity
});
\`\`\`

## Monitoring and Maintenance

### 1. Regular Index Maintenance

- Remove unused indexes
- Monitor index usage
- Rebuild fragmented indexes

### 2. Profiling

Enable profiling for slow operations:

\`\`\`javascript
// Profile operations slower than 100ms
db.setProfilingLevel(1, { slowms: 100 })

// View profile data
db.system.profile.find().sort({ ts: -1 }).limit(5)
\`\`\`

## Sharding for Scale

When your dataset grows beyond a single server:

### 1. Choose the Right Shard Key

\`\`\`javascript
// Good shard key: High cardinality, even distribution
sh.shardCollection("myapp.users", { "userId": 1 })

// Avoid: Low cardinality shard keys
sh.shardCollection("myapp.users", { "status": 1 }) // Only few status values
\`\`\`

## Conclusion

MongoDB performance optimization is an ongoing process. Start with proper indexing, optimize your queries, design efficient schemas, and monitor your database continuously.

Remember: measure first, optimize second. Use MongoDB's built-in tools to identify bottlenecks before implementing optimizations.
    `
  },
  'implementing-authentication-with-jwt': {
    id: '3',
    title: 'Implementing Authentication with JWT',
    excerpt: 'A comprehensive guide to implementing authentication in web applications using JSON Web Tokens (JWT). Learn about secure token storage, refresh strategies, and best practices.',
    date: 'February 18, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    slug: 'implementing-authentication-with-jwt',
    tags: ['JWT', 'Authentication', 'Security', 'Node.js'],
    content: `
# Implementing Authentication with JWT

JSON Web Tokens (JWT) have become the standard for stateless authentication in modern web applications. This comprehensive guide will walk you through implementing secure JWT authentication from scratch.

## What is JWT?

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure.

### JWT Structure

A JWT consists of three parts separated by dots (.):
- **Header**: Contains the type of token and signing algorithm
- **Payload**: Contains the claims (data)
- **Signature**: Used to verify the token hasn't been tampered with

## Setting Up JWT Authentication

### 1. Server-Side Implementation

First, let's set up the backend with Node.js and Express:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign(
    { userId }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h' }
  );
};

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user in database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Generate token
  const token = generateToken(user._id);
  
  res.json({ token, user: { id: user._id, email: user.email } });
});
\`\`\`

### 2. Token Verification Middleware

\`\`\`javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', userId: req.user.userId });
});
\`\`\`

## Client-Side Implementation

### 1. Token Storage

Store tokens securely on the client side:

\`\`\`javascript
// Store token
const storeToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Get token
const getToken = () => {
  return localStorage.getItem('authToken');
};

// Remove token
const removeToken = () => {
  localStorage.removeItem('authToken');
};
\`\`\`

### 2. HTTP Interceptors

Add tokens to requests automatically:

\`\`\`javascript
// Axios interceptor
axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
\`\`\`

## Refresh Token Strategy

Implement refresh tokens for better security:

\`\`\`javascript
// Generate refresh token
const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId }, 
    process.env.REFRESH_TOKEN_SECRET, 
    { expiresIn: '7d' }
  );
};

// Refresh endpoint
app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token required' });
  }
  
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }
    
    const newAccessToken = generateToken(user.userId);
    res.json({ accessToken: newAccessToken });
  });
});
\`\`\`

## Security Best Practices

### 1. Token Expiration

Keep access tokens short-lived (15-30 minutes) and use refresh tokens for longer sessions.

### 2. Secure Storage

- Use httpOnly cookies for refresh tokens
- Consider using secure storage libraries for sensitive data
- Never store tokens in plain text

### 3. Environment Variables

Store secrets in environment variables:

\`\`\`javascript
// .env file
JWT_SECRET=your-super-secret-jwt-key
REFRESH_TOKEN_SECRET=your-refresh-token-secret
\`\`\`

### 4. HTTPS Only

Always use JWT over HTTPS in production to prevent token interception.

## React Authentication Hook

Create a custom hook for authentication state:

\`\`\`jsx
import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      // Verify token and get user data
      verifyToken(token).then(userData => {
        setUser(userData);
      }).catch(() => {
        removeToken();
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    const { token, user } = response.data;
    
    storeToken(token);
    setUser(user);
    
    return user;
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  const value = { user, login, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
\`\`\`

## Conclusion

JWT authentication provides a scalable, stateless solution for modern web applications. By following security best practices and implementing proper token management, you can create a robust authentication system.

Remember to always validate tokens on the server side, use HTTPS, and keep your secret keys secure. Consider implementing refresh tokens for better user experience and security.
    `
  },
  'real-time-applications-with-socketio': {
    id: '4',
    title: 'Real-Time Applications with Socket.io',
    excerpt: 'Explore how to build real-time features such as chat, notifications, and collaborative editing using Socket.io and Node.js. This tutorial covers both server and client implementation.',
    date: 'January 30, 2023',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    slug: 'real-time-applications-with-socketio',
    tags: ['Socket.io', 'Real-time', 'Node.js', 'WebSockets'],
    content: `
# Real-Time Applications with Socket.io

Socket.io is a powerful library that enables real-time, bidirectional communication between web clients and servers. In this comprehensive guide, we'll explore how to build various real-time features using Socket.io.

## What is Socket.io?

Socket.io is a library that consists of:
- A Node.js server
- A JavaScript client library for the browser
- Built-in fallbacks and reliability features

It automatically chooses the best transport method available (WebSocket, polling, etc.) and provides features like automatic reconnection, room management, and namespace support.

## Setting Up Socket.io Server

### Basic Server Setup

\`\`\`javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

### Client-Side Setup

\`\`\`javascript
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
\`\`\`

## Building a Real-Time Chat Application

### Server Implementation

\`\`\`javascript
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a room
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', userId);
  });

  // Handle chat messages
  socket.on('chat-message', (data) => {
    const { roomId, message, userId, timestamp } = data;
    
    // Broadcast message to all users in the room
    io.to(roomId).emit('chat-message', {
      id: generateId(),
      message,
      userId,
      timestamp
    });
  });

  // Handle typing indicators
  socket.on('typing', (data) => {
    socket.to(data.roomId).emit('user-typing', {
      userId: data.userId,
      isTyping: data.isTyping
    });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
\`\`\`

### React Chat Component

\`\`\`jsx
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Chat = ({ roomId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [typingUsers, setTypingUsers] = useState(new Set());
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:4000');
    const socket = socketRef.current;

    // Join room
    socket.emit('join-room', roomId, userId);

    // Listen for messages
    socket.on('chat-message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    // Listen for typing
    socket.on('user-typing', ({ userId, isTyping }) => {
      setTypingUsers(prev => {
        const newSet = new Set(prev);
        if (isTyping) {
          newSet.add(userId);
        } else {
          newSet.delete(userId);
        }
        return newSet;
      });
    });

    return () => socket.disconnect();
  }, [roomId, userId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      socketRef.current.emit('chat-message', {
        roomId,
        message: newMessage,
        userId,
        timestamp: new Date().toISOString()
      });
      setNewMessage('');
    }
  };

  const handleTyping = (isTyping) => {
    socketRef.current.emit('typing', {
      roomId,
      userId,
      isTyping
    });
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className="message">
            <strong>{msg.userId}:</strong> {msg.message}
          </div>
        ))}
        {typingUsers.size > 0 && (
          <div className="typing-indicator">
            {Array.from(typingUsers).join(', ')} is typing...
          </div>
        )}
      </div>
      
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onFocus={() => handleTyping(true)}
          onBlur={() => handleTyping(false)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
\`\`\`

## Real-Time Notifications

### Server-Side Notification System

\`\`\`javascript
// Notification management
const userSockets = new Map(); // userId -> socketId mapping

io.on('connection', (socket) => {
  socket.on('register-user', (userId) => {
    userSockets.set(userId, socket.id);
  });

  socket.on('disconnect', () => {
    // Remove user from mapping
    for (let [userId, socketId] of userSockets.entries()) {
      if (socketId === socket.id) {
        userSockets.delete(userId);
        break;
      }
    }
  });
});

// Send notification to specific user
const sendNotificationToUser = (userId, notification) => {
  const socketId = userSockets.get(userId);
  if (socketId) {
    io.to(socketId).emit('notification', notification);
  }
};

// API endpoint to trigger notifications
app.post('/send-notification', (req, res) => {
  const { userId, message, type } = req.body;
  
  sendNotificationToUser(userId, {
    id: generateId(),
    message,
    type,
    timestamp: new Date().toISOString()
  });
  
  res.json({ success: true });
});
\`\`\`

### React Notification Hook

\`\`\`jsx
import { useState, useEffect } from 'react';

export const useNotifications = (userId) => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    // Register user for notifications
    newSocket.emit('register-user', userId);

    // Listen for notifications
    newSocket.on('notification', (notification) => {
      setNotifications(prev => [notification, ...prev]);
      
      // Show browser notification if permission granted
      if (Notification.permission === 'granted') {
        new Notification(notification.message);
      }
    });

    return () => newSocket.disconnect();
  }, [userId]);

  const clearNotification = (notificationId) => {
    setNotifications(prev => 
      prev.filter(n => n.id !== notificationId)
    );
  };

  return { notifications, clearNotification };
};
\`\`\`

## Collaborative Features

### Real-Time Document Editing

\`\`\`javascript
// Server-side document collaboration
const documents = new Map(); // documentId -> document data

io.on('connection', (socket) => {
  socket.on('join-document', (documentId) => {
    socket.join(documentId);
    
    // Send current document state
    const document = documents.get(documentId) || { content: '' };
    socket.emit('document-state', document);
  });

  socket.on('document-change', (data) => {
    const { documentId, changes, userId } = data;
    
    // Update document
    const document = documents.get(documentId) || { content: '' };
    // Apply changes logic here (could use operational transforms)
    documents.set(documentId, { ...document, ...changes });
    
    // Broadcast changes to other users
    socket.to(documentId).emit('document-changes', {
      changes,
      userId,
      timestamp: new Date().toISOString()
    });
  });

  socket.on('cursor-position', (data) => {
    socket.to(data.documentId).emit('cursor-update', {
      userId: data.userId,
      position: data.position
    });
  });
});
\`\`\`

## Performance Optimization

### Connection Management

\`\`\`javascript
// Rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api', limiter);

// Socket rate limiting
const socketRateLimit = new Map();

io.on('connection', (socket) => {
  const userId = socket.handshake.auth.userId;
  
  socket.use((packet, next) => {
    const now = Date.now();
    const userLimit = socketRateLimit.get(userId) || { count: 0, resetTime: now + 60000 };
    
    if (now > userLimit.resetTime) {
      userLimit.count = 0;
      userLimit.resetTime = now + 60000;
    }
    
    if (userLimit.count >= 60) { // 60 events per minute
      return next(new Error('Rate limit exceeded'));
    }
    
    userLimit.count++;
    socketRateLimit.set(userId, userLimit);
    next();
  });
});
\`\`\`

### Memory Management

\`\`\`javascript
// Clean up old data periodically
setInterval(() => {
  // Clean up old messages, notifications, etc.
  for (let [roomId, messages] of chatMessages.entries()) {
    if (messages.length > 1000) {
      chatMessages.set(roomId, messages.slice(-500)); // Keep latest 500
    }
  }
}, 5 * 60 * 1000); // Every 5 minutes
\`\`\`

## Testing Real-Time Features

### Unit Testing with Jest

\`\`\`javascript
const Client = require('socket.io-client');
const server = require('./server');

describe('Socket.io Tests', () => {
  let clientSocket;
  let serverSocket;

  beforeAll((done) => {
    server.listen(() => {
      const port = server.address().port;
      clientSocket = new Client(\`http://localhost:\${port}\`);
      
      server.on('connection', (socket) => {
        serverSocket = socket;
      });
      
      clientSocket.on('connect', done);
    });
  });

  afterAll(() => {
    server.close();
    clientSocket.close();
  });

  test('should receive message', (done) => {
    clientSocket.on('chat-message', (message) => {
      expect(message.content).toBe('Hello World');
      done();
    });
    
    serverSocket.emit('chat-message', { content: 'Hello World' });
  });
});
\`\`\`

## Conclusion

Socket.io provides a robust foundation for building real-time applications. From simple chat systems to complex collaborative tools, the patterns covered in this guide will help you create engaging, interactive experiences.

Key takeaways:
- Always handle connection/disconnection events properly
- Implement rate limiting to prevent abuse
- Use rooms and namespaces to organize your application
- Consider scalability with Redis adapter for multiple server instances
- Test your real-time features thoroughly

Remember to handle edge cases like network interruptions and implement proper error handling for production applications.
    `
  }
};

// Service functions following Single Responsibility Principle
export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPostsData);
};

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  return blogPostsData[slug] || null;
};

export const getRelatedPosts = (currentSlug: string, limit: number = 2): BlogPost[] => {
  return Object.values(blogPostsData)
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
};

export const searchBlogPosts = (searchTerm: string): BlogPost[] => {
  const term = searchTerm.toLowerCase();
  return Object.values(blogPostsData).filter(post =>
    post.title.toLowerCase().includes(term) ||
    post.excerpt.toLowerCase().includes(term) ||
    post.tags.some(tag => tag.toLowerCase().includes(term))
  );
};

export const filterBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return getAllBlogPosts();
  
  return Object.values(blogPostsData).filter(post =>
    post.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase())) ||
    post.title.toLowerCase().includes(category.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(category.toLowerCase())
  );
};
