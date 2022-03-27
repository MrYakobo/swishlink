# Swishlink

- Problem: Det är jobbigt att ta betalt av folk
- Lösning: Swish!

Swish-as-a-registration (SaaR) blir fullt möjligt med en swishlänk.
Jämför dessa två sätt att få folk att anmäla sig till ett event:

> "För att anmäla dig till eventet, swisha 80kr till det här långa numret och märk betalningen med Event"

Eller

> Klicka här för att swish-anmäla dig!

Helt klart är det sistnämda bäst.

Swishlänkar (swish://) är krångliga att göra dock, eftersom att [länken måste URI-encodas][1] först. Det är det problemet som swishlink löser :)

[1]: https://github.com/linuscorin/ruby_swish_qr/issues/1#issuecomment-618370462

## Known problems

Ja, det verkar funka på Android men inte iOS. Fett me rip, så undersök din målgrupp först.