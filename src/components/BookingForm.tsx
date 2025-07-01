import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import { z } from "zod";

const baseUrl = import.meta.env.VITE_BASE_URL;
if (!baseUrl) throw new Error("Missing VITE_BASE_URL");

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[0-9\s\-()]{7,20}$/.test(val),
      "Invalid phone number"
    ),
  meetingType: z.string().min(1, "Meeting type is required"),
  date: z.date({ required_error: "Date is required" }),
  time: z.string().min(1, "Time is required"),
  information: z.string().optional(),
});

const meetingTypes = [
  {
    id: "consultation",
    label: "Consultation",
    duration: "30 min",
    price: "$50",
  },
  {
    id: "project-discussion",
    label: "Project Discussion",
    duration: "60 min",
    price: "$100",
  },
  { id: "code-review", label: "Code Review", duration: "45 min", price: "$75" },
  {
    id: "mentoring",
    label: "Technical Mentoring",
    duration: "60 min",
    price: "$100",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const BookingForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    meetingType: "",
    date: null as Date | null,
    time: "",
    information: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Validate using zod
    const parsed = bookingSchema.safeParse(formData);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Step 2: Send to API
      const response = await fetch(`${baseUrl}/mail/meeting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking");
      }

      toast({
        title: "Booking confirmed!",
        description: `Your meeting is scheduled for ${format(
          formData.date,
          "MMMM d, yyyy"
        )} at ${formData.time}.`,
      });

      // Step 3: Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        meetingType: "",
        date: null,
        time: "",
        information: "",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          error.message ?? "Something went wrong while sending booking.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="meetingType" className="block mb-2 text-sm font-medium">
          Meeting Type
        </label>
        <select
          id="meetingType"
          name="meetingType"
          value={formData.meetingType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
        >
          <option value="">Select a meeting type</option>
          {meetingTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.label} ({type.duration} - {type.price})
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "w-full px-4 py-3 rounded-md bg-card border border-border hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-left flex items-center",
                  !formData.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.date ? (
                  format(formData.date, "PPP")
                ) : (
                  <span>Select date</span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={handleDateChange}
                disabled={(date) => {
                  const day = date.getDay();
                  // Disable weekends (Saturday and Sunday)
                  return day === 0 || day === 6 || date < new Date();
                }}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Time</label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "w-full px-4 py-3 rounded-md bg-card border border-border hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-left flex items-center",
                  !formData.time && "text-muted-foreground"
                )}
              >
                <Clock className="mr-2 h-4 w-4" />
                {formData.time || <span>Select time</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3" align="start">
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleTimeSelect(time)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm text-center",
                      formData.time === time
                        ? "bg-primary text-white"
                        : "bg-card hover:bg-secondary/30"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div>
        <label htmlFor="information" className="block mb-2 text-sm font-medium">
          Additional Information (optional)
        </label>
        <textarea
          id="information"
          name="information"
          value={formData.information}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="Tell me more about what you'd like to discuss..."
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>

      <p className="text-sm text-muted-foreground text-center">
        Upon confirmation, you'll receive an email with the meeting details.
      </p>
    </form>
  );
};

export default BookingForm;
