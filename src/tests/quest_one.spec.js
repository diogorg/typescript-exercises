import { output, printOutput } from '../quest_one';
import { mockOutputOne } from './mock_output_one'

describe('Test Quest One', () => {
  it('Should Output Right', () => {
    const mock = [
      "1",
      "2",
      "Visual",
      "4",
      "Nuts",
      "Visual",
      "7",
      "8",
      "Visual",
      "Nuts",
      "11",
      "Visual",
      "13",
      "14",
      "Visual Nuts",
    ];
    expect(output(15)).toEqual(mock);
  });

  it('Should Print All 100 Numbers', () => {
    // eslint-disable-next-line no-undef
    console.log = jest.fn();

    printOutput(100);
    // eslint-disable-next-line no-undef
    expect(console.log).toBeCalledTimes(1);
    // eslint-disable-next-line no-undef
    expect(console.log).toBeCalledWith(mockOutputOne);
  })
});
