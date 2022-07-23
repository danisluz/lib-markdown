const getFile = require('../index');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
];

describe('getFile::', () => {
  it('must be a function', () => {
    expect(typeof getFile).toBe('function');
  })
  it('should return array with results', async () => {
    const result = await getFile('/Users/dani/Documents/www/lib-markdown/test/files/texto1.md')
    expect(result).toEqual(arrayResult)
  })
  it('must return message "there are no links"', async () => {
    const result = await getFile('/Users/dani/Documents/www/lib-markdown/test/files/texto1_sem_links.md')
    expect(result).toBe('there are no links');
  })
})