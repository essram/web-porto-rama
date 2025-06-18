export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2024-03-15",
    excerpt: "Learn the basics of Next.js and start building your first app.",
    content: `
        Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.
   
        Key Features of Next.js:
   
        - Server-Side Rendering (SSR)
        - Static Site Generation (SSG)
        - File-based Routing
        - API Routes
   
        In this tutorial, we'll walk through the process of setting up a Next.js project and creating your first pages.
  
      `,
    category: "nextjs",
  },

  {
    id: 2,
    title: "CSS Tips and Tricks",
    slug: "css-tips-and-tricks",
    date: "2024-03-20",
    excerpt: "Improve your CSS skills with these handy tips and tricks.",
    content: `
          CSS is gaining powers with recent web evolution. And it is very clever with tricks that were long existing or that
          have emerged. Perhaps tricks shared here will school you with CSS tricks from the depths you were yet to explore.
            1. Draw a triangle using border
            2. Interchange background of an element
            3. Center an element
            4. Pill 💊 shape button
            5. Easily add beautiful loading indicator to your website
            6. Easy dark or light mode
            7. Truncate overflowing text with an ellipsis(...)
            8. Truncate long text to a number of lines
            9. Stop overworking yourself writing top, right, bottom, left
            10. Serve optimized images
          `,
    category: "css",
  },
  {
    id: 3,
    title: "React Beginner's Guide",
    slug: "react-beginners-guide",
    date: "2024-02-15",
    excerpt:
      "Kickstart your React Native journey with this beginner-friendly guide.",
    content: `
          React is a powerful library for building user interfaces. This guide covers the essentials to get you started:
            1. Understand the core concepts: JSX, Components, and State.
            2. Learn about props and how to pass data between components.
            3. Explore the useEffect hook for handling side effects.
            4. Build reusable components for scalable projects.
            5. Learn about React Router for navigation.
            6. Manage global state using Context API.
            7. Optimize performance with React.memo and useCallback.
          With these basics, you're ready to dive into more complex applications!
      `,
    category: "react",
  },
  {
    id: 4,
    title: "Flutter Tips and Tricks",
    slug: "flutter-tips-and-tricks",
    date: "2024-03-20",
    excerpt:
      "Boost your Flutter development skills with these essential tips and tricks.",
    content: `
          Flutter is a powerful UI toolkit for building natively compiled applications for mobile, web, and desktop. Here are some tips to enhance your Flutter development experience:
            1. Use the Flutter inspector to debug and tweak UI elements.
            2. Leverage hot reload to quickly see changes during development.
            3. Optimize your widgets with keys to improve performance.
            4. Create reusable custom widgets for better code modularity.
            5. Manage app state effectively using providers or Riverpod.
            6. Explore animations with the built-in AnimationController.
            7. Use dartfmt or format on save to keep your code clean and consistent.
            8. Utilize Flutter's Material and Cupertino libraries for beautiful UIs.
            9. Implement responsive design using MediaQuery or the LayoutBuilder.
            10. Test your app thoroughly with Flutter's testing tools (widget, integration, and unit tests).
          With these tips, you can build high-quality Flutter apps more efficiently!
      `,
    category: "flutter",
  },
  {
    id: 5,
    title: "Flutter Tips and Tricks",
    slug: "flutter-tips-and-tricks",
    date: "2024-03-20",
    excerpt:
      "Boost your Flutter development skills with these essential tips and tricks.",
    content: `
          Flutter is a powerful UI toolkit for building natively compiled applications for mobile, web, and desktop. Here are some tips to enhance your Flutter development experience:
            1. Use the Flutter inspector to debug and tweak UI elements.
            2. Leverage hot reload to quickly see changes during development.
            3. Optimize your widgets with keys to improve performance.
            4. Create reusable custom widgets for better code modularity.
            5. Manage app state effectively using providers or Riverpod.
            6. Explore animations with the built-in AnimationController.
            7. Use dartfmt or format on save to keep your code clean and consistent.
            8. Utilize Flutter's Material and Cupertino libraries for beautiful UIs.
            9. Implement responsive design using MediaQuery or the LayoutBuilder.
            10. Test your app thoroughly with Flutter's testing tools (widget, integration, and unit tests).
          With these tips, you can build high-quality Flutter apps more efficiently!
      `,
    category: "flutter",
  },
  {
    id: 6,
    title: "React Beginner's Guide",
    slug: "react-beginners-guide",
    date: "2024-02-15",
    excerpt:
      "Kickstart your React Native journey with this beginner-friendly guide.",
    content: `
          React is a powerful library for building user interfaces. This guide covers the essentials to get you started:
            1. Understand the core concepts: JSX, Components, and State.
            2. Learn about props and how to pass data between components.
            3. Explore the useEffect hook for handling side effects.
            4. Build reusable components for scalable projects.
            5. Learn about React Router for navigation.
            6. Manage global state using Context API.
            7. Optimize performance with React.memo and useCallback.
          With these basics, you're ready to dive into more complex applications!
      `,
    category: "react",
  },
  {
    id: 7,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2024-03-15",
    excerpt: "Learn the basics of Next.js and start building your first app.",
    content: `
        Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.
   
        Key Features of Next.js:
   
        - Server-Side Rendering (SSR)
        - Static Site Generation (SSG)
        - File-based Routing
        - API Routes
   
        In this tutorial, we'll walk through the process of setting up a Next.js project and creating your first pages.
  
      `,
    category: "nextjs",
  },

  {
    id: 8,
    title: "CSS Tips and Tricks",
    slug: "css-tips-and-tricks",
    date: "2024-03-20",
    excerpt: "Improve your CSS skills with these handy tips and tricks.",
    content: `
          CSS is gaining powers with recent web evolution. And it is very clever with tricks that were long existing or that
          have emerged. Perhaps tricks shared here will school you with CSS tricks from the depths you were yet to explore.
            1. Draw a triangle using border
            2. Interchange background of an element
            3. Center an element
            4. Pill 💊 shape button
            5. Easily add beautiful loading indicator to your website
            6. Easy dark or light mode
            7. Truncate overflowing text with an ellipsis(...)
            8. Truncate long text to a number of lines
            9. Stop overworking yourself writing top, right, bottom, left
            10. Serve optimized images
          `,
    category: "css",
  },
];
