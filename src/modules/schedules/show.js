import dayjs from "dayjs"

// Seleciona as sessões manhã, tarde e noite.
const periodMornig = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as listas.
    periodMornig.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Renderiza os agendametnos por período.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Adiciona o id do angemaneto.
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Cria o ícone de cancelar o agendamento.
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      // Adiciona o tempo, nome e ícone no item
      item.append(time, name, cancelIcon)

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour()

      // Renderiza o agendamento na sessão (manhã, tarde ou noite)
      if (hour <= 12) {
        periodMornig.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}
