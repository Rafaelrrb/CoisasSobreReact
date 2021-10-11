import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data display/PageTitle/PageTitle";
import Userinformation from "ui/components/data display/Userinformation/Userinformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja os profissionais da sua localidade"
        }
      />

      <Userinformation
        nome={"Rafa"}
        picture={"https://github.com/Rafaelrrb.png"}
        rating={3}
        description={"SLS"}
      />
    </div>
  );
};

export default Home;
