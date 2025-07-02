// Simple markdown processor following KISS principle
export const processMarkdownContent = (content: string): string => {
  return content
    .split("\n")
    .map((line) => {
      // Handle headers
      if (line.startsWith("### ")) {
        return `<h3 class="text-2xl font-bold mt-8 mb-4">${line.slice(4)}</h3>`;
      }
      if (line.startsWith("## ")) {
        return `<h2 class="text-3xl font-bold mt-12 mb-6">${line.slice(
          3
        )}</h2>`;
      }
      if (line.startsWith("# ")) {
        return `<h1 class="text-4xl font-bold mt-16 mb-8">${line.slice(
          2
        )}</h1>`;
      }

      // Handle code blocks
      if (line.startsWith("```")) {
        if (line.includes("javascript") || line.includes("jsx")) {
          return '<pre class="bg-card border rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm">';
        } else if (line === "```") {
          return "</code></pre>";
        }
      }

      // Handle inline code
      line = line.replace(
        /`([^`]+)`/g,
        '<code class="bg-card px-2 py-1 rounded text-primary">$1</code>'
      );

      // Handle bold text
      line = line.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

      // Handle bullet points
      if (line.startsWith("- ")) {
        return `<li class="mb-2">${line.slice(2)}</li>`;
      }

      // Regular paragraphs
      if (line.trim() && !line.startsWith("<")) {
        return `<p class="mb-4 leading-relaxed">${line}</p>`;
      }

      return line;
    })
    .join("\n");
};
