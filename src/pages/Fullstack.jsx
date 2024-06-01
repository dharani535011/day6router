const Card=({url,title})=>{
    return(
        <>
        <div class="card">
  <img src={url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
  </div>
</div>
        </>
    )
}

const Fullstack = () => {
  return (
    <div id="full"><Card title={'Best Full-Stack Development Project Ideas in 2024'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg'}/>
   <Card title={'How Long Would It Take to Be a Full Stack Developer?'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp'}/>
   <Card title={'How does Apache work? A detailed introduction to Apache'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png'}/>
   <Card title={'10 Best Database Management Systems For Software Developers'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png'}/>
   <Card title={'Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [U...'} url={'https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png'}/>
   <Card title={'Top 10 Full-Stack Developer Frameworks in 2024'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg'}/>
    </div>
  )
}

export default Fullstack