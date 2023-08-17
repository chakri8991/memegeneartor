import {Heading, GeneratorForm} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
const MemeGenerator = () => (
  <div>
    <Heading>Meme Generator</Heading>
    <GeneratorForm>
      <label htmlFor="imageId">Image URL</label>
      <input type="text" id="imageId" />
      <label htmlFor="topId">Top Text</label>
      <input type="text" id="topId" />
      <label htmlFor="bottomId">Bottom Text</label>
      <input type="text" id="bottomId" />
      <select>
        {fontSizesOptionsList.map(each => (
          <option key={each.optionId} value={each.optionId}>
            {each.displayText}
          </option>
        ))}
      </select>
      <button type="submit">Generator</button>
    </GeneratorForm>
  </div>
)

export default MemeGenerator
