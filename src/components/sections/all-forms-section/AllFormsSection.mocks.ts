import { IAllFormsSection } from "./AllFormsSection";

const base: IAllFormsSection = {
  data: [
    {
      name: "volunteer signup",
      description: "Join our volunteer program.",
      date: "3 hours ago",
      views: 5,
      published: true,
    },
    {
      name: "beta tester form",
      description: "",
      date: "yesterday",
      views: 0,
      published: false,
    },
    {
      name: "support request",
      description: "Request support from the team.",
      date: "just now",
      views: 0,
      published: false,
    },
    {
      name: "contact form",
      description: "Used to get in touch.",
      date: "2 days ago",
      views: 7,
      published: true,
    },
    {
      name: "job application",
      description: "Apply for open roles.",
      date: "4 hours ago",
      views: 9,
      published: true,
    },
    {
      name: "internal review form",
      description: "",
      date: "last week",
      views: 0,
      published: false,
    },
    {
      name: "feedback form",
      description: "",
      date: "about 1 hour ago",
      views: 0,
      published: false,
    },
    {
      name: "newsletter signup",
      description: "Subscribe for updates.",
      date: "5 minutes ago",
      views: 3,
      published: true,
    },
  ],
  loading: false,
  error: false,
};

const oneRow: IAllFormsSection = {
  data: [
    {
      name: "registration form",
      description: "For event signups.",
      date: "2 hours ago",
      views: 7,
      published: true,
    },
    {
      name: "feedback form",
      description: "",
      date: "1 day ago",
      views: 0,
      published: false,
    },
    {
      name: "survey form",
      description: "A quick survey.",
      date: "just now",
      views: 11,
      published: true,
    },
    {
      name: "job application",
      description: "Used to apply for jobs.",
      date: "3 days ago",
      views: 5,
      published: true,
    },
  ],
  loading: false,
  error: false,
};

const threeRows: IAllFormsSection = {
  data: [
    {
      name: "feedback form",
      description: "Collects user feedback.",
      date: "2 days ago",
      views: 0,
      published: false,
    },
    {
      name: "employment form",
      description: "Used for job applications.",
      date: "about 1 hour ago",
      views: 3,
      published: true,
    },
    {
      name: "survey form",
      description: "General opinion survey.",
      date: "5 minutes ago",
      views: 15,
      published: true,
    },
    {
      name: "registration form",
      description: "Event registration.",
      date: "yesterday",
      views: 0,
      published: false,
    },
    {
      name: "feedback form",
      description: "",
      date: "3 hours ago",
      views: 8,
      published: true,
    },
    {
      name: "newsletter signup",
      description: "Sign up for updates.",
      date: "just now",
      views: 2,
      published: true,
    },
    {
      name: "bug report",
      description: "",
      date: "1 week ago",
      views: 0,
      published: false,
    },
    {
      name: "survey form",
      description: "Quick survey.",
      date: "30 minutes ago",
      views: 6,
      published: true,
    },
    {
      name: "contact form",
      description: "Reach out to us.",
      date: "4 hours ago",
      views: 4,
      published: true,
    },
    {
      name: "feedback form",
      description: "",
      date: "about 1 hour ago",
      views: 0,
      published: false,
    },
    {
      name: "volunteer form",
      description: "Join as a volunteer.",
      date: "10 minutes ago",
      views: 1,
      published: true,
    },
    {
      name: "application form",
      description: "For internal use.",
      date: "3 days ago",
      views: 0,
      published: false,
    },
  ],

  loading: false,
  error: false,
};

const loading: IAllFormsSection = {
  data: [
    {
      name: "volunteer signup",
      description: "Join our volunteer program.",
      date: "3 hours ago",
      views: 5,
      published: true,
    },
    {
      name: "beta tester form",
      description: "",
      date: "yesterday",
      views: 0,
      published: false,
    },
    {
      name: "support request",
      description: "Request support from the team.",
      date: "just now",
      views: 0,
      published: false,
    },
    {
      name: "contact form",
      description: "Used to get in touch.",
      date: "2 days ago",
      views: 7,
      published: true,
    },
    {
      name: "job application",
      description: "Apply for open roles.",
      date: "4 hours ago",
      views: 9,
      published: true,
    },
    {
      name: "internal review form",
      description: "",
      date: "last week",
      views: 0,
      published: false,
    },
    {
      name: "feedback form",
      description: "",
      date: "about 1 hour ago",
      views: 0,
      published: false,
    },
    {
      name: "newsletter signup",
      description: "Subscribe for updates.",
      date: "5 minutes ago",
      views: 3,
      published: true,
    },
  ],
  loading: true,
  error: false,
};

export const mockAllFormsSectionProps = {
  base,
  oneRow,
  threeRows,
  loading,
};
