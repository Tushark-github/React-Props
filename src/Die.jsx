function Die({ dieSide = 6, from = 20 }) {
  const rollDie = Math.floor(Math.random() * dieSide) + 1;
  return (
    <div>
      <p>{from} Die is {rollDie}</p>
    </div>
  )
}

export default Die;

/* 
There is one Question what if provided more than on props but we pass only one props
ans = where is declare the by default props
    Ex . Die ({dieSide=6, dieLevel = 6})

*/