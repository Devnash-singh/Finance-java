package com.service;

package com.yourcompany.financemanager.service;

import com.yourcompany.financemanager.model.Transaction;
import com.yourcompany.financemanager.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    // Create or Save a Transaction
    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    // Get a specific Transaction by ID
    public Optional<Transaction> getTransaction(Long id) {
        return transactionRepository.findById(id);
    }

    // Get all Transactions
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    // Delete a Transaction by ID
    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }

    // Update a Transaction (if needed)
    public Transaction updateTransaction(Long id, Transaction transactionDetails) {
        Optional<Transaction> optionalTransaction = transactionRepository.findById(id);
        
        if (optionalTransaction.isPresent()) {
            Transaction existingTransaction = optionalTransaction.get();
            existingTransaction.setAmount(transactionDetails.getAmount());
            existingTransaction.setTransactionDate(transactionDetails.getTransactionDate());
            existingTransaction.setDescription(transactionDetails.getDescription());
            existingTransaction.setType(transactionDetails.getType());
            return transactionRepository.save(existingTransaction);
        } else {
            throw new RuntimeException("Transaction not found with id " + id);
        }
    }
}
