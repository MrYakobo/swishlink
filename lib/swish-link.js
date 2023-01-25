class DeviceLinks extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        if (location.protocol != 'https:') {
            console.warn(`Swish won't open on non-HTTPS connections (got: ${location.protocol})`)
        }
    }
    connectedCallback() {
        let swish_values = this.get_swish_values()
        this.shadowRoot.innerHTML = this.get_markup(swish_values)
    }
    get_swish_values() {
        // returns an object with the following keyvalues
        /*
        {
            payee: '123 456 7890',
            payee-editable: true,
            amount: '80',
            amount-editable: true,
            message: 'Hello',
            message-editable: true
        }
        */
        const required_attrs = ["payee"]
        const boolean_attrs = ["payee-editable", "amount-editable", "message-editable"]
        const default_empty_attrs = ['message', 'amount']
        const cast_to_integer_attrs = ["amount"]

        let out = {}

        for (const required_attr of required_attrs) {
            if (!this.hasAttribute(required_attr)) {
                throw new Error(`Required attribute ${required_attr} missing!`)
            }
            out[required_attr] = this.getAttribute(required_attr)
        }

        for (const boolean_attr of boolean_attrs) {
            out[boolean_attr] = this.getAttribute(boolean_attr) === 'true'
        }

        for (const default_empty_attr of default_empty_attrs) {
            out[default_empty_attr] = this.getAttribute(default_empty_attr)
        }
        for (const cast_to_integer_attr of cast_to_integer_attrs) {
            // ok if not exists
            if (!out[cast_to_integer_attr])
                continue

            out[cast_to_integer_attr] = parseInt(out[cast_to_integer_attr])
        }

        return out
    }
    make_uri(swish_values) {
        let obj = {
            version: 1,
            payee: {
                value: swish_values.payee,
                editable: swish_values["payee-editable"]
            },
            amount: {
                value: swish_values.amount,
                editable: swish_values["amount-editable"]
            },
            message: {
                value: swish_values.message,
                editable: swish_values["message-editable"]
            }
        }
        let baseURL = "swish://payment?data="
        return baseURL + encodeURI(JSON.stringify(obj))
    }
    get_markup(swish_values) {
        // tested with iphone and android devices
        let uri = this.make_uri(swish_values)
        let markup = `<a href="${uri}"><slot></slot></a>`
        return markup
    }
}

customElements.define('swish-link', DeviceLinks);