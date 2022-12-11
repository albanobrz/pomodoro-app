/* eslint-disable prettier/prettier */
import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownbutton, TaskInput } from './styles';
import { useForm } from 'react-hook-form'

export function Home() {
  const {register, handleSubmit, watch} = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput placeholder='Dê um nome para o seu projeto' id="task"  list="task-suggestions" {...register('task')} />

          <label htmlFor="">Durante</label>
          <MinutesAmountInput placeholder='00' type="number" id="minutesAmoung" step={5} min={5} max={60} {...register('minutesAmount', { valueAsNumber: true })} />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 12" />
            <option value="Projeto 13" />
            <option value="Projeto 14" />
          </datalist>

          <span>minutos.</span>
          </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownbutton type="submit" disabled={isSubmitDisabled} ><Play size={24} />Começar</StartCountdownbutton>
      </form>
    </HomeContainer>
  );
}
