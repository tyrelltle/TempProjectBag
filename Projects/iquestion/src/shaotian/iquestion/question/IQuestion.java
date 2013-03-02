package shaotian.iquestion.question;

import org.json.simple.JSONObject;

import shaotian.iquestion.selection.IAnswer;
import shaotian.iquestion.selection.ISelection;
import shaotian.iquestion.token.IToken;

public interface IQuestion {
	
	public IToken getAnswer();
	public int getNumAnswers();
	
	/*
	 * return passed rate, set jsonobject to pass/fail map
	 * 
	 * */
	public int result(IAnswer sel, JSONObject json);
	public int result(IAnswer sel);
	public void setQuestion(IToken t);
	public void addSelection(IToken t, boolean isAnswer);
	public float passRate();
}
