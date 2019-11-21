function loadTerminal(jQuery) {
  var typed = new Typed(".shell-line", {
    typeSpeed: 40,
    strings: [
      "dotnet new console -o myApp",
      "cd myApp",
      "vim Program.cs",
      "dotnet run",
      "dotnet new console -o myApp",
      "cd myApp",
      "vim Program.cs",
      "dotnet run",
      "dotnet new console -o myApp",
      "cd myApp",
      "vim Program.cs",
      "dotnet run",
      "dotnet new console -o myApp",
      "cd myApp",
      "vim Program.cs",
      "dotnet run",
      "dotnet new console -o myApp",
      "cd myApp",
      "vim Program.cs",
      "dotnet run"
    ],
    showCursor: true,
    cursorChar: ".",
    fadeOut: true,
    fadeOutDelay: 1000
  });
}


if (document.getElementById("shell-wrap"))
{
  $(document).ready(loadTerminal);
}
