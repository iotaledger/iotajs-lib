[@iota/iota.js](../README.md) / [models/IClient](../modules/models_iclient.md) / IClient

# Interface: IClient

[models/IClient](../modules/models_iclient.md).IClient

Client interface definition for API communication.

## Hierarchy

* **IClient**

## Implemented by

* [*SingleNodeClient*](../classes/clients_singlenodeclient.singlenodeclient.md)

## Table of contents

### Methods

- [address](models_iclient.iclient.md#address)
- [addressEd25519](models_iclient.iclient.md#addressed25519)
- [addressEd25519Outputs](models_iclient.iclient.md#addressed25519outputs)
- [addressOutputs](models_iclient.iclient.md#addressoutputs)
- [health](models_iclient.iclient.md#health)
- [info](models_iclient.iclient.md#info)
- [message](models_iclient.iclient.md#message)
- [messageChildren](models_iclient.iclient.md#messagechildren)
- [messageMetadata](models_iclient.iclient.md#messagemetadata)
- [messageRaw](models_iclient.iclient.md#messageraw)
- [messageSubmit](models_iclient.iclient.md#messagesubmit)
- [messageSubmitRaw](models_iclient.iclient.md#messagesubmitraw)
- [messagesFind](models_iclient.iclient.md#messagesfind)
- [milestone](models_iclient.iclient.md#milestone)
- [milestoneUtxoChanges](models_iclient.iclient.md#milestoneutxochanges)
- [output](models_iclient.iclient.md#output)
- [peer](models_iclient.iclient.md#peer)
- [peerAdd](models_iclient.iclient.md#peeradd)
- [peerDelete](models_iclient.iclient.md#peerdelete)
- [peers](models_iclient.iclient.md#peers)
- [tips](models_iclient.iclient.md#tips)

## Methods

### address

▸ **address**(`addressBech32`: *string*): *Promise*<[*IAddressResponse*](models_api_iaddressresponse.iaddressresponse.md)\>

Get the address details using bech32 address.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`addressBech32` | *string* | The address to get the details for.   |

**Returns:** *Promise*<[*IAddressResponse*](models_api_iaddressresponse.iaddressresponse.md)\>

The address details.

___

### addressEd25519

▸ **addressEd25519**(`addressEd25519`: *string*): *Promise*<[*IAddressResponse*](models_api_iaddressresponse.iaddressresponse.md)\>

Get the address details using ed25519 address.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`addressEd25519` | *string* | The address to get the details for.   |

**Returns:** *Promise*<[*IAddressResponse*](models_api_iaddressresponse.iaddressresponse.md)\>

The address details.

___

### addressEd25519Outputs

▸ **addressEd25519Outputs**(`addressEd25519`: *string*, `type?`: *number*, `includeSpent?`: *boolean*): *Promise*<[*IAddressOutputsResponse*](models_api_iaddressoutputsresponse.iaddressoutputsresponse.md)\>

Get the address outputs.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`addressEd25519` | *string* | The address to get the outputs for.   |
`type?` | *number* | Filter the type of outputs you are looking up, defaults to all.   |
`includeSpent?` | *boolean* | Filter the type of outputs you are looking up, defaults to false.   |

**Returns:** *Promise*<[*IAddressOutputsResponse*](models_api_iaddressoutputsresponse.iaddressoutputsresponse.md)\>

The address outputs.

___

### addressOutputs

▸ **addressOutputs**(`addressBech32`: *string*, `type?`: *number*, `includeSpent?`: *boolean*): *Promise*<[*IAddressOutputsResponse*](models_api_iaddressoutputsresponse.iaddressoutputsresponse.md)\>

Get the address outputs using bech32 address.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`addressBech32` | *string* | The address to get the outputs for.   |
`type?` | *number* | Filter the type of outputs you are looking up, defaults to all.   |
`includeSpent?` | *boolean* | Filter the type of outputs you are looking up, defaults to false.   |

**Returns:** *Promise*<[*IAddressOutputsResponse*](models_api_iaddressoutputsresponse.iaddressoutputsresponse.md)\>

The address outputs.

___

### health

▸ **health**(): *Promise*<*boolean*\>

Get the health of the node.

**Returns:** *Promise*<*boolean*\>

True if the node is healthy.

___

### info

▸ **info**(): *Promise*<[*INodeInfo*](models_inodeinfo.inodeinfo.md)\>

Get the info about the node.

**Returns:** *Promise*<[*INodeInfo*](models_inodeinfo.inodeinfo.md)\>

The node information.

___

### message

▸ **message**(`messageId`: *string*): *Promise*<[*IMessage*](models_imessage.imessage.md)\>

Get the message data by id.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`messageId` | *string* | The message to get the data for.   |

**Returns:** *Promise*<[*IMessage*](models_imessage.imessage.md)\>

The message data.

___

### messageChildren

▸ **messageChildren**(`messageId`: *string*): *Promise*<[*IChildrenResponse*](models_api_ichildrenresponse.ichildrenresponse.md)\>

Get the children of a message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`messageId` | *string* | The id of the message to get the children for.   |

**Returns:** *Promise*<[*IChildrenResponse*](models_api_ichildrenresponse.ichildrenresponse.md)\>

The messages children.

___

### messageMetadata

▸ **messageMetadata**(`messageId`: *string*): *Promise*<[*IMessageMetadata*](models_imessagemetadata.imessagemetadata.md)\>

Get the message metadata by id.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`messageId` | *string* | The message to get the metadata for.   |

**Returns:** *Promise*<[*IMessageMetadata*](models_imessagemetadata.imessagemetadata.md)\>

The message metadata.

___

### messageRaw

▸ **messageRaw**(`messageId`: *string*): *Promise*<*Uint8Array*\>

Get the message raw data by id.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`messageId` | *string* | The message to get the data for.   |

**Returns:** *Promise*<*Uint8Array*\>

The message raw data.

___

### messageSubmit

▸ **messageSubmit**(`message`: [*IMessage*](models_imessage.imessage.md)): *Promise*<*string*\>

Submit message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | [*IMessage*](models_imessage.imessage.md) | The message to submit.   |

**Returns:** *Promise*<*string*\>

The messageId.

___

### messageSubmitRaw

▸ **messageSubmitRaw**(`message`: *Uint8Array*): *Promise*<*string*\>

Submit message in raw format.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | *Uint8Array* | The message to submit.   |

**Returns:** *Promise*<*string*\>

The messageId.

___

### messagesFind

▸ **messagesFind**(`indexationKey`: *string*): *Promise*<[*IMessagesResponse*](models_api_imessagesresponse.imessagesresponse.md)\>

Find messages by index.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`indexationKey` | *string* | The index value.   |

**Returns:** *Promise*<[*IMessagesResponse*](models_api_imessagesresponse.imessagesresponse.md)\>

The messageId.

___

### milestone

▸ **milestone**(`index`: *number*): *Promise*<[*IMilestoneResponse*](models_api_imilestoneresponse.imilestoneresponse.md)\>

Get the requested milestone.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | *number* | The index of the milestone to get.   |

**Returns:** *Promise*<[*IMilestoneResponse*](models_api_imilestoneresponse.imilestoneresponse.md)\>

The milestone details.

___

### milestoneUtxoChanges

▸ **milestoneUtxoChanges**(`index`: *number*): *Promise*<[*IMilestoneUtxoChangesResponse*](models_api_imilestoneutxochangesresponse.imilestoneutxochangesresponse.md)\>

Get the requested milestone utxo changes.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | *number* | The index of the milestone to request the changes for.   |

**Returns:** *Promise*<[*IMilestoneUtxoChangesResponse*](models_api_imilestoneutxochangesresponse.imilestoneutxochangesresponse.md)\>

The milestone utxo changes details.

___

### output

▸ **output**(`outputId`: *string*): *Promise*<[*IOutputResponse*](models_api_ioutputresponse.ioutputresponse.md)\>

Find an output by its identifier.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`outputId` | *string* | The id of the output to get.   |

**Returns:** *Promise*<[*IOutputResponse*](models_api_ioutputresponse.ioutputresponse.md)\>

The output details.

___

### peer

▸ **peer**(`peerId`: *string*): *Promise*<[*IPeer*](models_ipeer.ipeer.md)\>

Get a peer.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`peerId` | *string* | The peer to delete.   |

**Returns:** *Promise*<[*IPeer*](models_ipeer.ipeer.md)\>

The details for the created peer.

___

### peerAdd

▸ **peerAdd**(`multiAddress`: *string*, `alias?`: *string*): *Promise*<[*IPeer*](models_ipeer.ipeer.md)\>

Add a new peer.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`multiAddress` | *string* | The address of the peer to add.   |
`alias?` | *string* | An optional alias for the peer.   |

**Returns:** *Promise*<[*IPeer*](models_ipeer.ipeer.md)\>

The details for the created peer.

___

### peerDelete

▸ **peerDelete**(`peerId`: *string*): *Promise*<*void*\>

Delete a peer.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`peerId` | *string* | The peer to delete.   |

**Returns:** *Promise*<*void*\>

Nothing.

___

### peers

▸ **peers**(): *Promise*<[*IPeer*](models_ipeer.ipeer.md)[]\>

Get the list of peers.

**Returns:** *Promise*<[*IPeer*](models_ipeer.ipeer.md)[]\>

The list of peers.

___

### tips

▸ **tips**(): *Promise*<[*ITipsResponse*](models_api_itipsresponse.itipsresponse.md)\>

Get the tips from the node.

**Returns:** *Promise*<[*ITipsResponse*](models_api_itipsresponse.itipsresponse.md)\>

The tips.