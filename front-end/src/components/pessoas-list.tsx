import { Card } from "antd";
import { ArrayPessoasType } from "../interface/pessoas";

interface Props {
  pessoas: ArrayPessoasType;
}

const PessoasList = ({ pessoas }: Props) => {
  return (
    <div>
      {pessoas.map((item) => (
        <Card key={item.cpf} title={item.nome}>
          <p>{item.cpf}</p>
        </Card>
      ))}
    </div>
  );
};

export default PessoasList;


