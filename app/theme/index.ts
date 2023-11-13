export default {
   colors: {
      gray: "#333",
      primary: "#22272E",
      secondary: "#373E47",
      third: "#1C2128",

      white: "#ffffff",
      white_2: "#fafbfc",
      white_3: "#F5F5F5",

      text_primary: "#ADBAC7",
      text_secondary: "#5E6A75",

      blue: "#263040",
      blue_text: "#5097ED",
   },
};

export const getColorForLanguage = (language: string) => {
   switch (language) {
      case "JavaScript":
         return "#F1E05A";
      case "TypeScript":
         return "#3178C6";
      case "Java":
         return "#b07219";
      case "HTML":
         return "#E34C26";
      case "CSS":
         return "#563D7C";
      case "YAML":
         return "#CB171E";
      case "PHP":
         return "#4F5D95";
      case "Go":
         return "#00ADD8";
      case "C++":
         return "#F34B7D";
      case "Python":
         return "#3572A5";
      case "Ruby":
         return "#701516";
      case "Dart":
         return "#00B4AB";

      default:
         return "#ADBAC7";
   }
};
