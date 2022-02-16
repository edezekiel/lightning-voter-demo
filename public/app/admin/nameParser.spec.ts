import { NameParserService } from './nameParser.service';

describe('nameParser', function () {
  let nameParser;

  beforeEach(() => {
    nameParser = new NameParserService();
  });

  it('should parse names correctly', () => {
    expect(nameParser.parse('f@f.com|frank|furter')[0].firstName).toBe('frank');
  });
});
