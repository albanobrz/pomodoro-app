/* eslint-disable prettier/prettier */
import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownbutton, TaskInput } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput placeholder='Dê um nome para o seu projeto' id="task" />

          <label htmlFor="">Durante</label>
          <MinutesAmountInput placeholder='00' type="nubmer" id="minutesAmoung" />

          <span>minutos.</span>
          </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownbutton type="submit"><Play size={24} />Começar</StartCountdownbutton>
      </form>
    </HomeContainer>
  );
}
