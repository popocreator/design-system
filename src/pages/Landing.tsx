import React, { useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  transition: all 1s;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
`;

const Title = styled.h2`
  font-size: 80px;
  font-weight: lighter;
  p {
    line-height: 1.6;
    @media (max-width: 720px) {
      .title {
        font-size: 36px;
      }
    }
  }
`;

export default function Landing() {
  useEffect(() => {
    const target = document.querySelector('body');
    target && bind(target);
  }, []);

  const bind = (target: any) => {
    const distanceScale = 2;
    const sectionSize = document.querySelectorAll('.section').length;
    target.style.height = distanceScale * sectionSize * 100 + 'vh';
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const viewHeight = window.innerHeight * distanceScale;
      const page = Math.floor(scrollY / viewHeight);
      document.querySelectorAll('.section').forEach((section, i) => {
        if (i === page) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  };

  return (
    <section id='home'>
      <Section className='section'>
        <Title>
          <p>지금,</p>
          <p>이대로가 좋아.</p>
        </Title>
      </Section>
      <Section className='section hidden'>
        <Title>
          <p>잘 하고 있어!</p>
        </Title>
      </Section>
      <Section className='section hidden'>
        <Title>
          <p>나는 언제나</p>
          <p>네 편이야.</p>
        </Title>
      </Section>
      <Section className='section hidden'>
        <Title>
          <p>너는 너라서</p>
          <p>아름다우니,</p>
        </Title>
      </Section>
      <Section className='section hidden'>
        <Title>
          <p>너의 모습을</p>
          <p>잃지 않았으면 좋겠어.</p>
        </Title>
      </Section>
    </section>
  );
}
