
const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCards
      colors={["#e4e8ef","#475bed"]}
      percentfillvalue={60}
      cardInfo={{
        title : "Total approve Documents",
        value : "approved",
        text : "Document approved", 
      }}
      />
      <AreaCards
      colors={["#e4e8ef","#475bed"]}
      percentfillvalue={20}
      cardInfo={{
        title : "Total rejected Documents",
        value : "rejected",
        text : "Document rejected", 
      }}
      />
      <AreaCards
      colors={["#e4e8ef","#475bed"]}
      percentfillvalue={40}
      cardInfo={{
        title : "Total pending Documents",
        value : "pending",
        text : "Document pending", 
      }}
      />
      <AreaCards
      colors={["#e4e8ef","#475bed"]}
      percentfillvalue={10}
      cardInfo={{
        title : "Total approve Documents",
        value : "approved",
        text : "Document approved", 
      }}
      />
    </section>
  )
}

export default AreaCards