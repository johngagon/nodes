var tm = require( 'text-miner' );
var fs = require('fs');

//http://www.readabilityformulas.com/freetests/six-readability-formulas.php
var corpusContent = fs.readFileSync('text2.txt', 'utf8');
var vocabContent = fs.readFileSync('wordlist2.txt','utf8');
//var vocabContent2 = fs.readFileSync('wordlist2.txt','utf8');
var exceptions = fs.readFileSync('propers.txt','utf8');

var exceptionList = exceptions.split(/\r?\n/);
var vocabList = vocabContent.split(/\r?\n/);
//var vocabList2 = vocabContent2.split(/\r?\n/);

corpusContent = tm.expandContractions(corpusContent);

var corpus = tm.Corpus([corpusContent]);
var unfilteredCorpus = tm.Corpus([corpusContent]);

unfilteredCorpus.clean()
.removeNewlines()
.removeInterpunctuation()
.trim()
.toLower()
.removeDigits();


corpus = corpus.clean()
  .removeNewlines()
  .removeWords(exceptionList)
  .trim()
  .toLower()
  .removeDigits()
  .stem('Lancaster')
  .removeInterpunctuation()
  .removeWords(vocabList)
  
  .clean();
  

//DTMs
var rawTerms = new tm.DocumentTermMatrix( unfilteredCorpus );
var unusedArray = rawTerms.vocabulary.filter(function(el){return el !=null && el.length>0;});
console.log(`Raw vocabulary is ${unusedArray.length} in text.txt`)
//HEAVY console.log('Raw vocabulary words: '+unusedArray);

var terms = new tm.DocumentTermMatrix( corpus );
var extraArray = terms.vocabulary.filter(function(el){return el !=null && el.length>0;});

console.log(`Words advanced: ${extraArray.length} (${unusedArray.length - extraArray.length} simple words used) written to o_extra.txt`);//
fs.writeFileSync('o_extra.txt',extraArray);
//HEAVY console.log('Extra (raw with wordlist stripped): '+extraArray);


var vocabCorpus = tm.Corpus([vocabContent]);



vocabCorpus = vocabCorpus
  .removeNewlines()
  .trim()
  .removeInterpunctuation()
  .removeWords(unusedArray)
  .clean()  ;

var vocabTerms = new tm.DocumentTermMatrix(vocabCorpus);
var vocabArray = vocabTerms.vocabulary.filter(function(el){return el !=null && el.length>0;});
var vocablen = 1003;
console.log(`Basic words ${vocablen} not used: ${vocabArray.length} out of ${vocablen-(vocabArray.length)} used, written to o_unused.txt`);//
fs.writeFileSync('o_unused.txt',vocabArray);
//HEAVY console.log("Word list array with text words stripped: "+vocabArray);

//TODO write the words that found in the vocab.