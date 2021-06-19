import EpicItem from './EpicItem'

const EpicList = ({ data }:any) => {

  return (
    <>
      {data.map((item:any, index:any) => (
        <div key={index}>
          <EpicItem item={item} index={index}/>
        </div>
        ))}
    </>
  )
}

export default EpicList
