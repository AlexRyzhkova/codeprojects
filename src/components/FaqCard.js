import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

  const Card = styled.div`
    text-align: center;
    position: relative;
    height: 300px;
    min-width: 300px;
  `
  const CardFront = styled(animated.div)`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    cursor: pointer;
    color: white;
    padding: 1rem;
    position: absolute;
    width: 100%;
    height: 100%;
  `
  const CardBack = styled(animated.div)`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    position: absolute;
    width: 100%;
    height: 100%;
  `
function FaqCard(props) {

  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px), rotateX(${flipped ? 180 : 0})deg`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Card onClick={() => setFlipped(!flipped)}>
      <CardFront
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <h2>{props.question}</h2>
      </CardFront>
      <CardBack
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <p>{props.answer}</p>
      </CardBack>
    </Card>
  )
}

export default FaqCard
