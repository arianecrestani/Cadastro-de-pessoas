
import React from "react";
import { ArrayPessoasType } from "../interface/pessoas";
import PessoasList from "../components/pessoas-list";


//TODO 1: table to show pessoas
//TODO 2: filter pessoas by (check filters on the repo)





export function HomeScreen() {
  const [pessoas, setPessoas] = React.useState<ArrayPessoasType>([]);
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    const fetchPessoas = async () => {
      const response = await fetch("http://localhost:3000/pessoas");
      const data = await response.json();
      if (data.length > 0) {
        setPessoas(data);
      }
    };
    startTransition(() => {
      fetchPessoas();
    });
  }, []);

  return (
    <main>
      <h1>Home Screen</h1>
      <div>
        {isPending
          ? "Loading..." // this will be a spinner 
          : <PessoasList pessoas={pessoas} />
        }
        </div>
    </main>
  );
}
