import EpicItem from './EpicItem'

const EpicList = ({ data }:any) => {

  return (
    <>
      {data.map((item:any, index:any) => (
            <EpicItem 
              key={item.identifier} 
              item={item} 
              index={index}
            />
        ))}
    </>
  )
}

export default EpicList
