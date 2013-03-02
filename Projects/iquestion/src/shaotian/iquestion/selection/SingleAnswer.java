package shaotian.iquestion.selection;

import shaotian.iquestion.token.IToken;

public class SingleAnswer implements IAnswer{
	public IToken answer;
	public SingleAnswer(IToken t )
	{
		answer=t;
	}
}
