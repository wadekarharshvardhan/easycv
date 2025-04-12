import { createStore } from "solid-js/store";

export const get_default_data = () => {
  return {
    "full name": "",
    designation: "",
    phone: "",
    address: "",
    "email address": "",
    "github username": "",
    profile: "",

    education: [
      { institution: "", qualification: "", time: "" },
    ],

    "work experience": [
      { company: "", position: "", time: "" },
    ],

    skills: [""],
    interests: [""],
    oss: [{ "project name": "", description: "", languages: "" }],
  };
};

export const get_demo_data = () => {
  return {
    "full name": "John Doe",
    designation: "frontend web developer",
    phone: "+91 7896585965",
    "email address": "johndoe@email.com",
    "github username": "johndoe",
    profile:
      "I'm a Frontend Web developer with a passion for creating beautiful and functional user interfaces. I have experience in building web applications using modern technologies like React, SolidJS, and Tailwind CSS. I'm always eager to learn new skills and improve my craft.",

    education: [
      {
        institution: "Sinhgad Instititute of Technology & Science",
        qualification: "B.E in Computer Science",
        time: "2023-2027",
      },
      {
        institution: "Bharati Vidyapeeth",
        qualification: "HSC (12th grade)",
        time: "2021-2023",
      },
      {
        institution: "MIT School",
        qualification: "10th grade (SSC)",
        time: "2021",
      },
    ],

    "work experience": [
      {
        company: "Dave Corporates",
        position: "junior frontend web developer",
        time: "2022 Oct - 2023 Jan",
      },
    ],

    skills: [
      "html skill-icons:html",
      "css skill-icons:css",
      "javascript skill-icons:javascript",
      "typescript skill-icons:typescript",
      "react logos:react",
      "tailwind css logos:tailwindcss-icon",
      "unocss simple-icons:unocss",
      "solid JS logos:solidjs-icon",
    ],

    interests: [
      "tweaking neovim skill-icons:neovim-dark",
      "Gnu / artix linux simple-icons:artixlinux",
      "lua scripting file-icons:lua",
      "Ricing linux bi:palette2",
      "shell scripting file-icons:terminal",
    ],

    oss: [
      {
        "project name": "NetStats",
        description:
          "An Tool to see Analytics of your Network. It shows the current upload and download speed of your network, the total upload and download speed of your network, and the total time of your network.",
        languages: "javascript, solidJs, css",
      },
      {
        "project name": "FIREBOLT",
        description:
          "A Simple 2D Animated Game",
        languages: "typescript, solidJs, unocss, vite",
      },
      {
        "project name": "Signal Controls",
        description:
          "To control Signals Easily with a simple UI. It has a simple UI with a lot of features like controlling multiple signals at once, controlling signals with keyboard shortcuts, and many more.",
        languages: "javascript, solidJs, css ",
      },
    ],
  };
};

export const [store, setStore] = createStore(get_default_data());
