package shaotian.iquestion.QuestionManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import org.json.simple.JSONObject;

import shaotian.iquestion.question.IQuestion;
import shaotian.iquestion.selection.IAnswer;



public class QuestionSet {

	HashMap<UUID,IQuestion> questions;
	HashMap<UUID,IAnswer> answers;
	public  QuestionSet()
	{
		this.questions=new HashMap<UUID,IQuestion>();
		this.answers=new HashMap<UUID,IAnswer>();
	}
	public UUID addQuestion(IQuestion q)
	{
		UUID id=UUID.randomUUID();
		this.questions.put(id, q);
		return id;
	}
	
	public boolean addAnswer(UUID qid,IAnswer ans)
	{
		if(this.questions.containsKey(qid))
			answers.put(qid, ans);
		return true;
	}
	public void removeQuestion(int ind)
	{
		this.questions.remove(ind);
	}
	public  double evaluate() {
		Iterator qit = this.questions.entrySet().iterator();
		double passed=0;
		double totalsel=0;
		while(qit.hasNext())
		{
			
			Map.Entry pair = (Map.Entry)qit.next();
	        UUID qid=(UUID) pair.getKey();
	        IQuestion q=(IQuestion)pair.getValue();
	        totalsel+=q.getNumAnswers();
	        passed+=q.result(this.answers.get(qid));
	        
		}
		return passed/totalsel;
	}
	
	public  double evaluate(JSONObject json) {
		Iterator qit = this.questions.entrySet().iterator();
		double passed=0;
		double totalsel=0;
		while(qit.hasNext())
		{
			
			Map.Entry pair = (Map.Entry)qit.next();
	        UUID qid=(UUID) pair.getKey();
	        IQuestion q=(IQuestion)pair.getValue();
	        totalsel+=q.getNumAnswers();
	        JSONObject tmpjson=new JSONObject();
	        passed+=q.result(this.answers.get(qid),tmpjson);
	        json.put(qid, tmpjson);
	        
		}
		return passed/totalsel;
	}
}
