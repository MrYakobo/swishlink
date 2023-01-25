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

# Lib

Om du inte har nått emot lite javascript så finns det ett litet bibliotek.
Använd swish-link som en WebComponent så här:

```html
<script src="https://raw.githubusercontent.com/MrYakobo/swishlink/main/lib/swish-link.js"></script>

<swish-link payee="1234567890" payee-editable="false" amount="10" amount-editable="false" message="Hello"
    message-editable="true">
    <p>This markup shows up inside the link</p>
</swish-link>
```

[Komplett exempel här][2]

[2]: https://mryakobo.github.io/swishlink/lib/