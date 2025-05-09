const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "password123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Prepare report",
          description: "Compile the sales report for Q1.",
          date: "2025-05-10",
          category: "Reporting"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Update CRM",
          description: "Add new client data to the CRM system.",
          date: "2025-04-25",
          category: "Data Entry"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Client follow-up",
          description: "Contact client X about feedback delay.",
          date: "2025-05-01",
          category: "Communication"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "password123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Team meeting prep",
          description: "Prepare agenda for the weekly team meeting.",
          date: "2025-05-07",
          category: "Planning"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Market research",
          description: "Analyze competitor strategies.",
          date: "2025-05-08",
          category: "Research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Budget tracking",
          description: "Review and update expense logs.",
          date: "2025-05-03",
          category: "Finance"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Submit proposal",
          description: "Failed to submit the client proposal by deadline.",
          date: "2025-04-30",
          category: "Sales"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "password123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Review resumes",
          description: "Screen applicants for developer role.",
          date: "2025-05-02",
          category: "HR"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Organize training",
          description: "Schedule onboarding training for new hires.",
          date: "2025-05-09",
          category: "Training"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Policy update",
          description: "Draft updates to remote work policy.",
          date: "2025-05-11",
          category: "Administration"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "password123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Website update",
          description: "Fix broken links on homepage.",
          date: "2025-05-06",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Server maintenance",
          description: "Routine check of internal servers.",
          date: "2025-05-01",
          category: "IT"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "App deployment",
          description: "Missed deadline for app deployment.",
          date: "2025-04-29",
          category: "DevOps"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Debug UI issue",
          description: "Fix header overflow in mobile view.",
          date: "2025-05-07",
          category: "Frontend"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "password123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Content creation",
          description: "Write blog post for company website.",
          date: "2025-05-06",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Email campaign",
          description: "Send out monthly newsletter.",
          date: "2025-05-03",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Social media post",
          description: "Failed to post campaign teaser in time.",
          date: "2025-04-28",
          category: "Social Media"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "password123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return { employees, admin }
    
    
  }