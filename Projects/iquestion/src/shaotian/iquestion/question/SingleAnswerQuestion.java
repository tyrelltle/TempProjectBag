package shaotian.iquestion.question;

import org.json.simple.JSONObject;

import shaotian.iquestion.selection.IAnswer;
import shaotian.iquestion.selection.SingleAnswer;
import shaotian.iquestion.token.IToken;

public class SingleAnswerQuestion implements IQuestion {

	IToken mQuestion;
	IToken mAnswer;
	@Override
	public IToken getAnswer() {
		 
		return mAnswer;
	}

	@Override
	public int getNumAnswers() {
		 
		return 1;
	}

	@Override
	public int result(IAnswer sel, JSONObject json) {
		 
		int ret=0;
		if(!(sel instanceof SingleAnswer))
				throw new IllegalArgumentException();
		if(mAnswer.equals(((SingleAnswer)sel).answer))
		{
			ret=1;
			if(json!=null)
				json.put(0, true);
		}
		else
		{
			ret=0;
			if(json!=null)
				json.put(0, false);
		}
		return ret;
	}

	@Override
	public int result(IAnswer sel) {
		 
		return result(sel,null);
	}

	@Override
	public void setQuestion(IToken t) {
		 mQuestion=t;
		
	}

	@Override
	public void addSelection(IToken t, boolean isAnswer) {
		 mAnswer=t;
		
	}

	@Override
	public float passRate() {
		 
		return 0;
	}

}
