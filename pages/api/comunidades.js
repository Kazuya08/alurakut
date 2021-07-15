import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(req, res) {
  console.log(req);
  if (req.method === "POST") {
    const TOKEN = "0269d25b0b4a61267ed2821902d655";

    const client = new SiteClient(TOKEN);

    //Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "968646", //Id do model de "Communities" criado pelo Dato
      ...req.body,
      //   title: "Comunidade teste",
      //   imageUrl:
      //     "https://i.pinimg.com/474x/16/02/7b/16027bfba2e74c5d90b6ce0f28ff9f96.jpg",
      //   creatorslug: "kazuya",
    });

    res.json({
      dados: "Dados",
      registroCriado: registroCriado,
    });

    return;
  }

  res.status(404).json({
    message: "Ainda náo temos nada no GET, mas no POST tem!",
  });
}
