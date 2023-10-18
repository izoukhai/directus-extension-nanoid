import { defineOperationApi } from "@directus/extensions-sdk";
import { customAlphabet, nanoid } from "nanoid";

type Options = {
  length: number;
  alphabet: string;
};

export default defineOperationApi<Options>({
  id: "operation-nanoid",
  handler: ({ length, alphabet }) => {
    const size = Number(length) || 21;
    return alphabet ? customAlphabet(alphabet, size)() : nanoid(size);
  },
});
