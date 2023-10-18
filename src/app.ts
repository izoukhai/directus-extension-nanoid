import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "operation-nanoid",
  name: "Nanoid",
  icon: "123",
  description: "Generate an unique string ID with Nanoid",
  overview: ({ length, alphabet }) => [
    {
      label: "Length",
      text: length,
    },
	
    {
      label: "Alphabet",
      text: alphabet,
    },
  ],
  options: [
    {
      field: "length",
      name: "Length",
      type: "integer",
      meta: {
        width: "half",
        interface: "input",
        options: {
          min: 1,
        },
      },
      schema: {
        default_value: 21,
      },
    },
    {
      field: "alphabet",
      name: "Custom alphabet",
      type: "string",
      meta: {
        width: "half",
        interface: "input",
        note: "Leave empty for default Nanoid alphabet.",
      },
    },
  ],
});
