import Title from './components/Title'
import Summary from './components/summary'
import Description from './components/Description'
import Form from './components/form'
export default function Test() {
  return (
    <>
      <Title/>
      <Summary/>
      <Description/>
      <Form defText="test" defCount={1}/>
    </>
  );
}
