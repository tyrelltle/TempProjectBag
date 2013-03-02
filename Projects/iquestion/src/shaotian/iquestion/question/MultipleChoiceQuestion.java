package shaotian.iquestion.question;

import java.util.ArrayList;

import org.json.simple.JSONObject;

import shaotian.iquestion.selection.IAnswer;
import shaotian.iquestion.selection.ISelection;
import shaotian.iquestion.selection.MultiSelection;
import shaotian.iquestion.token.IToken;

public class MultipleChoiceQuestion implements IQuestion{
	private IToken mQuestion;
	private ArrayList<Integer> mAnswerIndexs;
	private ArrayList<IToken> mSelection;
	
	public MultipleChoiceQuestion()
	{
		mAnswerIndexs=new ArrayList<Integer>();
		mSelection=new ArrayList<IToken>();
	}
	
	public void setQuestion(IToken q)
	{
		this.mQuestion=q;
	}
	
	public void addSelection(IToken tok, boolean isAnswer)
	{
		mSelection.add(tok);
		if(isAnswer)
			this.mAnswerIndexs.add(mSelection.size()-1);
			
	}

	@Override
	public IToken getAnswer() {
		// TODO Auto-generated method stub
		return this.mQuestion;
	}



	@Override
	public float passRate() {
		// TODO Auto-generated method stub
		return 0;
	}



	@Override
	public int result(IAnswer sel, JSONObject res) {
		// TODO Auto-generated method stub
		int passed=0;
		if(!(sel instanceof MultiSelection))
			throw new IllegalArgumentException();
		  
		ArrayList<Integer> sellis=((MultiSelection)sel).sels;
		for(int i=0;i<this.mAnswerIndexs.size();i++)	
		{	
			boolean ispassed=sellis.contains(this.mAnswerIndexs.get(i));
			passed=ispassed?passed+1:passed;
			if(res!=null)
				res.put(this.mAnswerIndexs.get(i), ispassed);
				
		}	
		

		
		return passed;
		
	}

	@Override
	public int result(IAnswer sel) {
		// TODO Auto-generated method stub
		
		return this.result(sel, null);
	}

	@Override
	public int getNumAnswers() {
		return this.mAnswerIndexs.size();
	}


	
	
}
