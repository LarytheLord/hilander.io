const summarizeDocument = async (documentId: number) => {
  try {
    const response = await fetch('http://localhost:3001/api/ai/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ documentId }),
    });

    if (!response.ok) {
      throw new Error('Failed to summarize document');
    }

    const data = await response.json();
    // Update the UI with the summary
    console.log('Document summary:', data.summary);
    // You can update the state or display the summary in a modal
  } catch (error) {
    console.error('Error summarizing document:', error);
    // Handle the error (e.g., show an error message to the user)
  }
};

// Add a button in the document list to trigger summarization
<button onClick={() => summarizeDocument(doc.id)} className="text-blue-500">
  Summarize
</button>