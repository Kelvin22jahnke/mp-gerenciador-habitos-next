import { text } from "stream/consumers";

export default function NovoHabito()
{
    async function CadastrarNovoHabito(formData:FormData)
    {
       "use server";
       const habito = formData.get("habito");
       
    }

    return(
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-4xl font-light text-center text-white font-display">Novo Hábito</h1>
            <form action={CadastrarNovoHabito} className="flex flex-col gap-4 mt-4">
                <input type="text" name="habito" id="habito" className="p-2 font-sans text-xl text-white rounded-nd bg-neutral-800"></input>
                <button type="submit" className="bg-[#45EDAD] font-display text-neutral-900 font-regular text-2xl p2 rounded-md mt-8">
                    Cadastrar
                </button>
                <button className="bg-neutral-800 text-[#F85858] font-displayfont-regular text-2xl p-2 rounded-md">
                    Cancelar
                </button>
            </form>
        </main>
    );
}