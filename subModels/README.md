# Submodels

Replication Initiation model can be splitted into 5 submodels. These sub models' final files are in this folder.

1. Activation.
2. Dissociation.
3. Binding and polymerization. (we haven't finished it, sorry =( )
4. Displacing.
5. Reactivation.

For each sub model there are 2 files: annotated sbml (.xml) and antimony (.txt).

## XML-files

XML-files are annotated in %tool name% submodels of the Replication Initiation model.
All of them are generated via [BioUML](http://biouml.org) and checked using 
[SBML validator](http://sbml.org/Facilities/Validator/).

## txt-files

Antimony files of our sub models are presented in these txt-files. They are also generated via 
[BioUML](http://biouml.org).

## Simplifications & problems

1. Main difficulty was that we need to model a stochastic processes. So we have made some simplifications in dissociation model, where we have neglected the weights during random number generating.
2. Another one was to model interaction with chromosome. There are around 2227 binding sites around the chromosome. DnaA-ATP and DnaA-ADP molecules bind to and release from the binding sites on the chromosome. It's a difficult problem to model this process.
