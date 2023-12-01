import './App.css'

function App() {
  const SearchForm = () => {
    return <form></form>
  }

  const Button = ({ type, text }) => {
    return <button>{text}</button>
  }

  const Link = ({ href, name }) => {
    return <a href={href}>{name}</a>
  }

  const Image = ({ href, imgSource, alt }) => {
    return (
      <a href={href}>
        <img src={imgSource} alt={alt} />
      </a>
    )
  }

  const TimeWidget = () => {
    const newDate = new Date()
    return <div className='date'>{newDate.toString()}</div>
  }

  return (
    <>

      <div className='raw top-chart'>
          <Link href='...' name='Сейчас в сми' />
          <Link href='...' name='В Германии' />
          <Link href='...' name='Рекомендуем' />
          <TimeWidget/>
      </div>

      <div className='news-block'>
        <div className='some-news'>
          <Image href='ria.ru' imgSource='...' alt='Иконка РИА новости' />
          <Link href='...' name='Путин Путин Путин' />
        </div>
        <div className='some-news'>
          <Image href='ria.ru' imgSource='...' alt='Иконка РИА новости' />
          <Link href='...' name='Путин Путин Путин' />
        </div>
        <div className='some-news'>
          <Image href='ria.ru' imgSource='...' alt='Иконка РИА новости' />
          <Link href='...' name='Путин Путин Путин' />
        </div>
      </div>

      <div className='search-block'>
        <Image href='ya.ru' imgSource='...' alt='баннер яндекса' />
        <div className='raw'>
          <Link href='...' name='Видео' />
          <Link href='...' name='Картинки' />
          <Link href='...' name='Новости' />
        </div>
        <SearchForm>
          <Button type='Accept' text='Найти' />
          <Link href='...' name='Найдется всё' />
        </SearchForm>
      </div>

      <div className='adv'>
        <Image href='kino.ru' imgSource='...' alt='Новинка кино' />
      </div>

      <div className='widgets'>
        <div className='weather'>
          <Image href='weather.com' imgSource='...' alt='тучки\солнышко' />
          <Link href='...' name='солнечно\тучно' />
        </div>
        <div className='popular'>
          <Link href='...' name='Посещаемое' />
          <Link href='...' name='Недвижимость' />
          <Link href='...' name='Маркет' />
        </div>
      </div>

      {/......../}

    </>
  )
}

export default App
