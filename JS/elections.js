/* 
You are given an unordered set of votes, each containing a candidate and a timestamp. 
Write a function that takes votes and a timestamp and returns the leading candidate until that point in time.
*/


// 1. let's set up a data structure that reflects "unordered set of votes, each containing a candidate and a timestamp. "
let elections = [
  {
    name: 'candidate 3',
    timestamp: 1595948635497
  },
  {
    name: 'candidate 1',
    timestamp: 1595948132497
  },
  {
    name: 'candidate 2',
    timestamp: 1595938135497
  },
  {
    name: 'candidate 2',
    timestamp: 1595341135497
  },
  {
    name: 'candidate 1',
    timestamp: 1595945635580
  },
  {
    name: 'candidate 1',
    timestamp: 1595938633393
  }, {
    name: 'candidate 1',
    timestamp: 1595948005490
  },
]


// 2. let's Write a function that takes votes and a timestamp and returns the leading candidate until that point in time.
const getWinnerCandidate = (elections, timestampLimit) => {
  
  //Since we need a list with the names of the candidates, we need to create a Set, so we hold the respective values unique
  const SetListOfCandidates = new Set()
  
  //lets consume all the votes and store the names into the Set Structure
  elections.forEach(item => {
    SetListOfCandidates.add(item.name)
  })

  // finally we can get a list of sorted candidates.
  let listOfCandidates = Array.from(SetListOfCandidates).sort()
  
  // this results in:
  // [candidate 1, candidate 2, candidate 3]
  

  // we consume again the votes, this time to find out the votes each candidate has given the timestamp limit we received 
  // as a parameter
  const getListOfCandidatesWithVotes = (candidateName) => {
    return elections.filter(item => item.name === candidateName && item.timestamp <= timestampLimit)
  }

  // finally we consume the list of candidates and we generate a structure from it with the votes filtered
  const getResults = listOfCandidates.map(candidate => getListOfCandidatesWithVotes(candidate))

  /**
  and as result we have:
  
  [
    [{
      name: 'candidate 1',
      timestamp: 1595945635580
    },
    {
      name: 'candidate 1',
      timestamp: 1595938633393
    }, {
      name: 'candidate 1',
      timestamp: 1595948005490
    }, {
      name: 'candidate 1',
      timestamp: 1595948132497
    }],
    [{
      name: 'candidate 2',
      timestamp: 1595938135497
    },
    {
      name: 'candidate 2',
      timestamp: 1595341135497
    }],
    [{
      name: 'candidate 3',
      timestamp: 1595948635497
    }]
  ]
  */


  // In that orderm we need to get a list with the amount of votes
  const getMax = getResults.map(votes => votes.length)
  // this results in [4,2,1]
  
  // let's get the winner 
  const getWinner = Math.max(...getMax) //4 

  //and lets get the index of the winner
  const getIndexWinner = getMax.indexOf(getWinner) //0

  //finally return the winner and the votes the candidate got.
  return { winner: listOfCandidates[getIndexWinner], votes: getWinner }

}
