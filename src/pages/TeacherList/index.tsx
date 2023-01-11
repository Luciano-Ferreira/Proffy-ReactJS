import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'
import './styles.css'

function TeacherList() {
  const [teachers, setTeachers] = useState<any>([])

  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      })
      setTeachers(response.data)

    } catch (err) {
      console.log(err);

      const fakeData = [
        {
          id: 1,
          subject: "Artes",
          cost: 80,
          user_id: 1,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 2,
          subject: "Biologia",
          cost: 80,
          user_id: 2,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 3,
          subject: "Ciencias",
          cost: 80,
          user_id: 3,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 4,
          subject: "Educação Física",
          cost: 80,
          user_id: 4,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 5,
          subject: "Física",
          cost: 80,
          user_id: 5,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 6,
          subject: "Historia",
          cost: 80,
          user_id: 6,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 7,
          subject: "Matematica",
          cost: 80,
          user_id: 7,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 8,
          subject: "Portugues",
          cost: 80,
          user_id: 8,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 9,
          subject: "Quimica",
          cost: 80,
          user_id: 9,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        }, {
          id: 10,
          subject: "Geografia",
          cost: 80,
          user_id: 10,
          name: "Luciano Silva",
          avatar: "https://github.com/luciano-ferreira.png",
          whatsapp: "+5511971869004",
          bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
        },
      ]

      setTeachers(fakeData)

    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os professores disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação fisica' },
              { value: 'Física', label: 'Física' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value)
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}
export default TeacherList
