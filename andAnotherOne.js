document.querySelectorAll(".replaceq").forEach(oldScript => {
  let fixedCode = oldScript.innerHTML
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  // Create a new script element
  let newScript = document.createElement("script");

  if (oldScript.src) {
    newScript.src = oldScript.src; // keep external source if present
  } else {
    newScript.textContent = fixedCode;
  }

  // Copy attributes (except src which we handled already)
  [...oldScript.attributes].forEach(attr => {
    if (attr.name !== "src") newScript.setAttribute(attr.name, attr.value);
  });

  oldScript.replaceWith(newScript);
});
