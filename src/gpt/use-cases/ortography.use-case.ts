import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const ortographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  // Seleccionamos la opcion chat. Pero podemos usar image, audio, etc.
  // openai.chat
  // openai.image, etcs
  const completion = await openai.chat.completions.create({
    messages: [
      {
        // Role del sistema
        role: 'system',
        // Importante: Establece el comportamiento del modelo
        // si no se establece, el modelo no sabrá qué hacer y
        // no realizara correctamente la tarea.
        content: `
        
        Te seran proveidos textos con posibles errores ortograficos.
        Tu tarea es corregirlos y devolver el texto corregido.
        Las palabras usadas deben existir en la Real Academia Española (RAE).
        Tambien debes de dar un porcentaje de confianza de la corrección. 
        Debes de responder en formato JSON.

         Ejemplo de respuesta:
         {
           userScore: number;
           errors: string[], // ['error -> corrección', 'error2 -> corrección2']
           message: string; // 'Usa emojis y texto para felicitar al usuario'
         
         }

          Si no hay errores ortograficos, debes de retornar un mensaje de felicitaciones.

         `,
      },
      {
        // Definimos el rol del usuario
        role: 'user',
        // Enviamos el mensaje al modelo
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo-1106',
    // Cuanto mas alto sea el valor, mas random sera la respuesta.
    // Cuanto mas bajo sea el valor, mas predecible sera la respuesta.
    temperature: 0.3,
    // Max tokens es la cantidad maxima de tokens que puede tener la respuesta.
    max_tokens: 150,

    response_format: {
      type: 'json_object',
    },
  });

  const jsonResp = JSON.parse(completion.choices[0].message.content!);
  // Obtenemos solo la primera opción de la respuesta, ya que puede haber múltiples
  return jsonResp;
};
