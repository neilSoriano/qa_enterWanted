# qa_enterWanted

Alpha: any alphabetical characters uppercase/lowercase
Numeric: numbers only 0-9
Special: not alpha or numerical; includes blank space; any other character but ‘.’ should not be allowed, will break parsing

REQUIRED Fields

I used the boundary value analysis test technique to test the required fields in Enter Wanted. For some I tested, the minimum requirement and some I tested the maximum requirement.
These are the inputs I used.

Header (9-19 chars, ANY): 
19 chars: NDdnp!@d !+029 fju4

MKE (2-4 chars, alpha OR special):
2 chars: p:

Originating Agency Identifier (9 chars, alphanumeric):
Qikd8pnj4

Name (1-30 chars, ANY):
4G”MdlIsvLB4”FPowX0WF 4bOA86cF

Sex (1 char, alpha only: M, F, U):
M

Race (1 char, alpha):
T

Height (3 chars, numeric: FII format):
513

Weight (1-3 chars, numeric in lbs, leading zero allowed when needed):
3 chars: 091

Hair (3-10 chars, alpha):
10 chars: Blackbrown

Offense (5-15 chars, ANY):
15 chars: h W6$q+> Jm>(2B

Date of Warrant/Violation (8 chars, numeric in MMDDYYYY; dates from 1900 - today+1):
12151900

