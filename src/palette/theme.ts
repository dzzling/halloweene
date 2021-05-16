import colors from "../colors.ts";
import { html } from "https://deno.land/x/html/mod.ts";

interface ColorObject {
  [index: string]: string | ColorObject;
}

function renderColors(colors: ColorObject): string {
  return Object.entries(colors)
    .map(([key, value]) => {
      if (typeof value === "string") {
        return html`<li
          class="color"
          style="background-color: ${value}; border-color: ${value}"
        >
          ${key}
        </li>`;
      }

      return html`<li>
        <p class="label">${key}</p>
        <ul>
          ${renderColors(value)}
        </ul>
      </li>`;
    })
    .join("\n");
}

async function getTheme(): Promise<string> {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body {
            font-family: sans-serif;
          }

          ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            border: 1px dotted black;
            padding: 10px;
          }

          li:not(.color) {
            margin-left: 2px;
            margin-bottom: 8px;
          }

          .color {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            border-opacity: 0.5;
            font-size: 10px;
          }

          .label {
            margin-right: 8px;
            margin-bottom: 8px;
          }
        </style>
      </head>
      <body>
        <h1>Concrete Dark Palette</h1>
        <ul class="colors">
          ${renderColors(colors)}
        </ul>
      </body>
    </html>
  `;
}

export default getTheme;