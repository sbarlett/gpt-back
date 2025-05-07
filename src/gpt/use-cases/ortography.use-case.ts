interface Options {
  prompt: string;
}
export const ortographyCheckUseCase = async ({
  prompt,
}: Options): Promise<string> => {
  return new Promise((resolve) => {
    resolve(prompt);
  });
};
