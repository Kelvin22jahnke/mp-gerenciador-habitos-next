import DayState from "@/components/day_state";
import Image from "next/image";
import Link from "next/link";
export default function Home() {

  const habitos = {
    "beber agua": {
      "2023-07-18": true,
      "2023-07-17": false,
      "2023-07-16": false
     },
     "estudar programação": {
      "2023-07-18": true,
      "2023-07-17": true,
      "2023-07-16": false
     },
  };

  const data = new Date();
  const diaAtual = data.getDay();
  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const ordernacaoDias = diasDaSemana.slice(diaAtual + 1).concat(diasDaSemana.slice(0, diaAtual + 1));

  return (
    
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habitos == null || (Object.keys(habitos).length == 0 && 
      (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">Você não possui hábitos cadastrados</h1>
      ))}
     {habitos != null && Object.entries(habitos).map(
        ([habitos, dates]) => (
          <div key={habitos} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">{habitos}</span>
              <button>
                <Image src="/images/delete.svg" width={20} height={20} alt="Botão Delete"/>
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {ordernacaoDias.map(
                dia =>(
                  <div key={dia} className="flex flex-col last:font-bold">
                    <span  className="font-sans text-xs text-white text-center">
                    {dia}
                    </span>
                    <DayState day={true} />
                  </div>
                )
              )}
            </section>
          </div>
        ))}

      <Link href="novo-habito" className="fixed text-center botton-10 w-2/3 left-1/2 -translate-x-1/2 
      text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl p-2 rounded-md"> Novo Hábito</Link>
    </main>
  );
}
